import api from "./Api";

const TaskService = {
  getAllTasks: async (): Promise<any> => {
    const { data } = await api.get("/tasks");
    return data;
  },
  post: async (task: any): Promise<any> => {
      //mosch.created = moment().format("dd, hh:mm, DD.MM.YYYY");
      const { data } = await api.post("/tasks", task);
      return data;
  }
};

export default TaskService;
