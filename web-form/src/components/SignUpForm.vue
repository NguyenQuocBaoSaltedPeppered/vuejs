<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error"> {{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="SENT">Sentinels</option>
      <option value="CTRL">Controllers</option>
      <option value="INIT">Initiatiors</option>
      <option value="Duel">Duelists</option>
    </select>

    <label>Champions can use</label>
    <input type="text" v-model="tempChamp" @keyup="addItemToChamps">
    <div v-for="champ in champs" :key="champ" class="champList">
      <span @click="deleteChamp(champ)">{{ champ }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="isTermsAccepted">
      <label>Accept terms and conditions</label>
    </div>

    <!-- Một cách khác để dùng checkbox để lưu trữ nhiều dữ liệu -->
    <!-- <div>
      <input type="checkbox" value="classic" v-model="guns">
      <label>classic</label>
    </div>
    <div>
      <input type="checkbox" value="ghost" v-model="guns">
      <label>Ghost</label>
    </div>
    <div>
      <input type="checkbox" value="shorty" v-model="guns">
      <label>Shorty</label>
    </div>
    <div>
      <input type="checkbox" value="frenzy" v-model="guns">
      <label>Frenzy</label>
    </div>
    <div>
      <input type="checkbox" value="sheriff" v-model="guns">
      <label>Sheriff</label>
    </div> -->

    <div class="submit">
      <button>Join the Valorant tournament!</button>
    </div>
  </form>
  <!-- <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role code: {{ role }}</p>
  <p>Terms accepted: {{ isTermsAccepted }}</p> -->
  <!-- <p>Guns: {{ guns }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'SENT',
      isTermsAccepted: false,
      tempChamp: '',
      champs: [],
      passwordError: '',
      // guns: []
    }
  },
  methods: {
    addItemToChamps(e) {
      if(e.key === ',' && this.tempChamp) {
        this.tempChamp = this.tempChamp.slice(0, -1).toUpperCase();
        if(!this.champs.includes(this.tempChamp)) {
          this.champs.push(this.tempChamp);
        }
        this.tempChamp = '';
      }
    },
    deleteChamp(champ) {
      this.champs = this.champs.filter((item) => {
        return champ !== item
      })
    },
    handleSubmit() {
      // Validate password
      this.passwordError = this.password.length > 5 ?
        '' : 'Password must be at least 6 chars long';

      if(!this.passwordError) {
        console.log("Email: ", this.email);
        console.log("Password: ", this.password);
        console.log("Role: ", this.role);
        console.log("Champions can play: ", this.champs);
      }
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .champList {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #ff4454;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>