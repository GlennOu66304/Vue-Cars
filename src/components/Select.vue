<template>
  <div>
    <select
      class="form-control form-control-lg mb-3"
      :name="name"
      @input="$emit('input', $event.target.value)"
      :class="{ 'is-invalid': errors }"
      :value="value"
    >
      <option v-for="(option, label) in options" :key="label" :value="option.value">
        {{ option.value }}
      </option>
    </select>
    <span v-if="info">{{ info }}</span>
    <div v-if="errors" class="invalid-feedback">
      {{ errors }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    value: String,
    name: String,
    errors: String,
    options: Array,
    info: String,
    type: String,
  },
};
</script>

<style></style>
