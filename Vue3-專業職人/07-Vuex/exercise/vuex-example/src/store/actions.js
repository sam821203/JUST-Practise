export default {
  // 這裡的名稱跟下面的 mutations 是不一樣的
  handMenuOpen(context) {
    const bool = !context.state.isOpen;
    context.commit("handMenuOpen", bool);
  },
};
