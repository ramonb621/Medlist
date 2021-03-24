import axios from "axios";

export default {
    getRecs: function() {
        return axios.get("/api/meds");
    },

    singleRec: function(id) {
        return axios.get("/api/meds/" + id);
    },

    deleteRec: function(id) {
        return axios.delete("/api/meds/" + id);
    },

    saveMedRec: function(medData) {
        return axios.post("/api/meds", medData);
    }
};