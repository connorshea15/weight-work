import http from "../http-common";

class weightWorkService {
    getAll() {
        return http.get("/users");
    }

    create(data) {
        return http.post("/workouts", data);
    }

    getMyWorkouts(id) {
        return http.get(`/workouts/${id}`);
    };

    getSingleWorkout(id) {
        return http.get(`/workouts/single/${id}`);
    }
    
};

export default new weightWorkService();