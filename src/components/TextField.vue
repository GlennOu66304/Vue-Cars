<template>
  <div>
    <input
      class="form-control form-control-lg"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
      :class="{ 'is-invalid': errors }"
      :value="value"
    />
    <span  v-if="info">{{info}}</span>
    <div v-if="errors" class="invalid-feedback">
      {{ errors }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    type: String,
    placeholder: String,
    name: String,
    errors: String,
    info:String,
    value: String,
    
  },
};
</script>

<style>


</style>
