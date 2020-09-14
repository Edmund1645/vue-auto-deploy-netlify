import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('should add a task when button is clicked', async () => {
    const wrapper = mount(App);
    const task = 'Do laundry';
    wrapper.find('input.task-input').setValue(task);
    await wrapper.find('button.add-task-button').trigger('click');
    expect(wrapper.vm.$data.todos.indexOf(task)).toBeGreaterThan(-1);
  });

  it('should render the tasks', () => {
    const todos = ['pick up groceries', 'buy guitar pick'];
    const wrapper = mount(App, {
      data() {
        return {
          todos,
        };
      },
    });
    expect(wrapper.find('div#todos>ul').text()).toContain(todos[0]);
  });

  it('should delete a task when the delete button is clicked', async () => {
    const todos = ['Order pizza for dinner'];
    const wrapper = mount(App, {
      data() {
        return {
          todos,
        };
      },
    });
    await wrapper.find('button.delete-task-button').trigger('click');
    expect(wrapper.vm.$data.todos.indexOf(todos[0])).toEqual(-1);
  });
});
