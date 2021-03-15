import http from "../http-common";

class weightWorkService {
    getAll() {
        return http.get("/users");
    }

    create(data) {
        return http.post("/workouts", data);
    }
};

export default new weightWorkService();