<script setup>
import Logo from "./assets/logo.svg";
import { reactive } from "vue";

// create a reactive object to store the form data
const formData = reactive({
  task: [],
  activity: [],
  number: 1,
});

const addTask = () => {
  formData.number++;
  console.log(formData.number);
};

// create a function to handle the form submission

const handleSubmit = () => {
  console.log("form submitted");
};
</script>

<template>
  <div class="container">
    <h1>Form</h1>
    <hr />
    <!-- create a form with 3 inputs and a button  -->
    <form @submit.prevent="handleSubmit">
      <div class="d-flex gap-2">
        <!-- agregar icono de add -->
        <h3>Agregar tarea</h3>
        <button type="button" class="btn" @click="addTask">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/512/plus-2-math.png"
          />
        </button>
      </div>

      
      <div v-for="number in formData.number" class="mb-3">
        <hr />
        <label for="exampleInputEmail1" class="form-label">Task</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          v-model="formData.task[number - 1]"
        />

        <label class="form-label">Activity</label>
        <select class="form-select" v-model="formData.activity[number -1 ]">
          <option value="" disabled selected>Open this select menu..</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Urgente</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- display the form data in the console -->
    <pre>{{ formData.task }}</pre>
    <pre>{{ formData.activity }}</pre>
  </div>
</template>

<style scoped></style>
