import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

// mock, spy
describe("HelloWorld Component test", () => {
  // beforeAll(() => {}); // 제일 처음 한번만
  // beforeEach(() => {}); // 테스트 전 마다
  // afterEach(() => {}); // 테스트 후 마다
  // afterAll(() => {}); // 제일 마지막 한번만
  test("문자 테스트", () => {
    const Msg = "Fucking Msg";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: Msg,
      },
    });

    expect(wrapper.props().msg).isEqual(Msg);
  });
});
