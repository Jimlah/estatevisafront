import Model from "./Model.service";

class Test extends Model {
  constructor() {
    super();
    this.path = "/estates";
  }
}

export default new Test();
