const state = {
    won: false,
    lost: false
};

const getters = {
    isWin(state) {
        return state.won;
    },
    isLose(state) {
        return state.lost;
    }
};

const mutations = {
    restartGame(state) {
        state.won = false;
        state.lost = false;
    }
};

const actions = {
    restartGame({ commit }) {
        commit("restartGame");
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };