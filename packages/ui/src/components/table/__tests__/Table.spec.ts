import { mount } from "@vue/test-utils";
import Table from "../Table.vue";
import { createLocaler } from "vue-localer";

const localer = createLocaler({
  fallbackLocale: "en-US",
  messages: {
    "en-US": {
      table: {
        rowsPerPage: "{0} rows per page",
        of: "of"
      }
    }
  }
});
const data = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
  { id: 3, name: "Doe", age: 22 }
];
const control = { rows: 10, page: 1, field: "id", direction: "asc" };
describe("Table Component", () => {
  it("emits update:control event when controlModel is set", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { key: "name", name: "Name" },
          { key: "age", name: "Age" }
        ],
        rows: data,
        count: data.length,
        control
      },
      global: {
        plugins: [localer]
      }
    });
    await wrapper.vm.$nextTick();
    wrapper.vm.controlModel = { rows: 20, page: 2, field: "name", direction: "desc" };
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()).toHaveProperty("update:control");
  });

  it("does not emit update:control event when controlModel is set to current value", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { key: "name", name: "Name" },
          { key: "age", name: "Age" }
        ],
        rows: data,
        count: data.length,
        control
      },
      global: {
        plugins: [localer]
      }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()).not.toHaveProperty("update:control");
  });

  it("emits update:control event with different controlModel value", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { key: "name", name: "Name" },
          { key: "age", name: "Age" }
        ],
        rows: data,
        count: data.length,
        control
      },
      global: {
        plugins: [localer]
      }
    });
    await wrapper.vm.$nextTick();
    wrapper.vm.controlModel = { rows: 30, page: 3, field: "age", direction: "asc" };
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()).toHaveProperty("update:control");
  });

  it("sorts rows when sort method is called", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { key: "name", name: "Name", sortable: true },
          { key: "age", name: "Age" }
        ],
        rows: data,
        count: data.length
        // control: { rows: 10, page: 1, field: "name", direction: "asc" }
      },
      global: {
        plugins: [localer]
      }
    });
    // search for the sort div and click it. The desc sort div has the class i-fa-sort-desc
    await wrapper.find(".i-fa-sort").trigger("click");
    await wrapper.vm.$nextTick();
    let controlEvent: {
      rows: number,
      page: number,
      field: string,
      direction: string
    }[][] | undefined = wrapper.emitted("update:control");
    expect(controlEvent).toBeTruthy();
    // check if the sort direction is asc
    if (controlEvent) {
      expect(controlEvent[0][0].direction).toBe("asc");
    } else {
      expect(controlEvent).toBeTruthy();
    }
  });

  it("selects all rows when selectAll is triggered", async () => {
  const wrapper = mount(Table, {
    props: {
      columns: [
        { key: "name", name: "Name" },
        { key: "age", name: "Age" }
      ],
      rows: data,
      count: data.length,
      control,
      selectable: true
    },
    global: {
      plugins: [localer]
    }
  });
  await wrapper.vm.$nextTick();
  wrapper.vm.flux.selecteAll = true;
  await wrapper.vm.$nextTick();
  expect(wrapper.vm.flux.rows.every(row => row.checked)).toBe(true);
});

it("deselects all rows when selectAll is triggered again", async () => {
  const wrapper = mount(Table, {
    props: {
      columns: [
        { key: "name", name: "Name" },
        { key: "age", name: "Age" }
      ],
      rows: data,
      count: data.length,
      control,
      selectable: true
    },
    global: {
      plugins: [localer]
    }
  });
  await wrapper.vm.$nextTick();
  wrapper.vm.flux.selecteAll = true;
  await wrapper.vm.$nextTick();
  wrapper.vm.flux.selecteAll = false;
  await wrapper.vm.$nextTick();
  expect(wrapper.vm.flux.rows.every(row => !row.checked)).toBe(true);
});

it("emits update:selected event when a row is selected", async () => {
  const wrapper = mount(Table, {
    props: {
      columns: [
        { key: "name", name: "Name" },
        { key: "age", name: "Age" }
      ],
      rows: data,
      count: data.length,
      control,
      selectable: true
    },
    global: {
      plugins: [localer]
    }
  });
  await wrapper.vm.$nextTick();
  wrapper.vm.flux.rows[0].checked = true;
  await wrapper.vm.$nextTick();
  expect(wrapper.emitted()).toHaveProperty("update:selected");
});
});
