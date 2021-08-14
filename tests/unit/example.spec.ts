import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

// unit Test 팀내에서 test coverage

const createWrapper = (msg = 'test') => shallowMount(HelloWorld, {
  props: { msg },
});

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'test msg';
    const wrapper = createWrapper(msg);
    expect(wrapper.props('msg')).toEqual(msg);
  });

  // it('count click test', async () => {
  //   const wrapper = createWrapper();
  //   const plusCntSpy = jest.spyOn(wrapper.vm, 'plusCnt');
  //   const minusCntSpy = jest.spyOn(wrapper.vm, 'minusCnt');
  //   const loginFn = jest.fn();
  //   jest.mock('../services/authService', () => ({
  //     login: loginFn,
  //     logout: loginFn,
  //   }));
  //   const userName = 'userName';
  //   wrapper.vm.loginHandler(userName);
  //   expect(loginFn).toBeCalledTimes(1);
  //   expect(loginFn.mock.calls[0]).toEqual([userName]);

  //   expect(wrapper.vm.count).toBe(0);

  //   await wrapper.find('.b').trigger('click');
  //   await wrapper.vm.$nextTick();
  //   expect(plusCntSpy).toBeCalledTimes(1);
  //   expect(wrapper.vm.count).toBe(1);

  //   await wrapper.find('.a').trigger('click');
  //   await wrapper.vm.$nextTick();
  //   expect(minusCntSpy).toBeCalledTimes(1);
  //   expect(wrapper.vm.count).toBe(0);
  // });

  it('count click test2', async () => {
    const wrapper = createWrapper();
    const plusCntSpy = jest.spyOn(wrapper.vm, 'plusCnt');
    const minusCntSpy = jest.spyOn(wrapper.vm, 'plusCnt');

    expect(wrapper.vm.count).toBe(0);

    await wrapper.find('.b').trigger('click');
    await wrapper.vm.$nextTick();
    expect(plusCntSpy).toBeCalledTimes(1);
    expect(wrapper.vm.count).toBe(1);

    await wrapper.find('.a').trigger('click');
    await wrapper.vm.$nextTick();
    expect(minusCntSpy).toBeCalledTimes(1);
    expect(wrapper.vm.count).toBe(0);

    await wrapper.find('.a').trigger('click');
    await wrapper.vm.$nextTick();
    expect(minusCntSpy).toBeCalledTimes(1);
    expect(wrapper.vm.count).toBe(0);
  });
});
