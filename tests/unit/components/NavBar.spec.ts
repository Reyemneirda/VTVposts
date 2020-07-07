import router from "@/router";
import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import store from "@/store";
import { CombinedVueInstance } from "vue/types/vue";
let wrapper: any;

describe("Navbar.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(Navbar, { store, router });
  });
  it("should show login/register options at first", () => {
    const navItems = wrapper.findAll("li");
    expect(navItems.length).toBe(4);
  });

  it("should show username once logged in", async () => {
    await wrapper.vm.$store.dispatch("users/loginUser", {
      username: "reyemneirda",
      password: "p7dtfxgxf",
    });
    const navItems = wrapper.findAll("li");
    const username = navItems.at(navItems.length - 1).text();
    expect(username).toBe("reyemneirda");
  });
});
