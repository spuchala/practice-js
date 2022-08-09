const input = {
  i: 10,
  b: () => {
    console.log(this.i);
  },
  c() {
    console.log(this.i);
  }
};

input.b();
input.c();
