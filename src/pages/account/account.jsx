import "./account.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setCredentials } from "../../redux/slices/authSlice";
import {
  useLogoutMutation,
  useUpdateUserMutation,
} from "../../redux/slices/usersApiSlice";

const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="account">
      <div className="container">
        <AccountDetails />
        <TodoApp />
      </div>
    </div>
  );
};

function AccountDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grad, setGrad] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error("حدث خطا..!");
      console.log(error);
    }
  };

  const updateProfileSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
        phone,
        email,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("تم تحديث الحساب بنجاح..!");
    } catch (error) {
      toast.error("حدث خطأ ما..!");
      console.log(error);
    }
  };

  return (
    <div className="account-details">
      <div className="user-img">
        <img src="https://aminelgazy.mathjewel.com/avatar-1.png" alt="صورتك" />
        <h1 className="username">{userInfo?.name}</h1>
      </div>
      <form className="details-inputs" onSubmit={updateProfileSubmitHandler}>
        <div className="username-inp">
          <label>الاسم</label>
          <input
            type="text"
            placeholder={userInfo?.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="phone-inp">
          <label>رقم الهاتف</label>
          <input
            type="tel"
            placeholder={userInfo?.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="pass-inp">
          <label>الايميل</label>
          <input
            type="email"
            placeholder={userInfo?.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pass-inp">
          <label>الصف</label>
          <input type="email" placeholder={userInfo?.grad} readOnly />
        </div>
        <div className="account-btns">
          <button type="submit">تحديث الحساب</button>
          <button onClick={logoutHandler} type="button">
            تسجيل الخروج
          </button>
        </div>
      </form>
    </div>
  );
}

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks?.length === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  let addTask = (name) => {
    setTasks((prev) => {
      if (!prev) {
        return [{ name: name, done: false }];
      } else {
        return [...prev, { name: name, done: false }];
      }
    });
  };

  let updateTaskDone = (taskIndex, newDone) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  };

  let tasksCompleted = tasks?.filter((task) => task.done).length || 0;
  let tasksTotal = tasks?.length || 0;

  let getMessage = () => {
    let percentage = (tasksCompleted / tasksTotal) * 100;
    if (percentage === 0) {
      return "ابدا بانجاز مهامك 😄";
    } else if (percentage === 100) {
      return "عمل جيد احسنت 💙";
    }
    return "استمر انت في تقدم 💪";
  };

  let removeTask = (taskIndex) => {
    const newTasks = [...tasks].filter((_, index) => {
      return index !== taskIndex;
    });

    setTasks(() => newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  let renameTask = (index, newName) => {
    setTasks((prev) => {
      let newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  };

  return (
    <div className="todo-app">
      <h1>المهام</h1>
      <h2>
        {tasksCompleted === 0 && tasksTotal === 0
          ? ""
          : `${tasksCompleted} / ${tasksTotal} اكتمل`}
      </h2>
      <h2>{getMessage()}</h2>
      <div className="todo-content">
        <AddTaskForm onAdd={addTask} />
        <div className="tasks">
          {tasks?.map((task, index) => (
            <Task
              {...task}
              onToggle={(done) => updateTaskDone(index, done)}
              onDelete={() => removeTask(index)}
              onRename={(newName) => renameTask(index, newName)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AddTaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="اضف مهمتك الخاصة"
      />
      <button>+</button>
    </form>
  );
}

function Task({ name, done, onToggle, onDelete, onRename }) {
  const [editMode, setEditMode] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <div className={"task " + (done ? "done" : "not-done")}>
      <div>
        <CheckBox
          checked={done}
          onClick={() => {
            onToggle(!done);
          }}
        />
        {!editMode && (
          <span onClick={() => setEditMode((prev) => !prev)}>{name}</span>
        )}
        {editMode && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => onRename(e.target.value)}
            />
          </form>
        )}
      </div>
      <button onClick={onDelete}>
        <i className="uil uil-trash-alt"></i>
      </button>
    </div>
  );
}

function CheckBox({ checked, onClick }) {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className="checkbox unchecked">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
          </svg>
        </div>
      )}
      {checked && (
        <div className="checkbox checked">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Account;
