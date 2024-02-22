<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Ref</h2>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePersonOne">Update person one</button>
    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update person two</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // Sự khác biệt là ko thể khởi tạo reactive với giá trị nguyên thuỷ.
    // Nếu làm thì nó không còn đạt được hiệu quả reactive nữa.
    // Do đó reactive dù nhìn tiện hơn, ref lại có vẻ ổn và dễ dùng hơn.
    const personOne = ref({ name: 'BaoNQ', age: 24});
    const personTwo = reactive({ name: 'ChienHV', age: 23});
    const updatePersonOne = () => {
      personOne.value.age += 10;
    };
    const updatePersonTwo = () => {
      personTwo.age += 10;
    };
    return { personOne, personTwo, updatePersonOne, updatePersonTwo};
  },
}
</script>
