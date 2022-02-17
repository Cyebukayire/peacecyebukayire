import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Token from "@components/Token.vue"

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Token.vue', () => {
  it('renders props.token when passed', () => {
    const token = "DKS34LW8"
    const wrapper = shallowMount(Token, {
      props: { token }
    })
    expect(wrapper.text()).toMatch(token)
  })
})
