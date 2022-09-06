<template>
  <div class=" input-group mb-3">
    <!-- container -->
    <div class="input-group-prepend">
      <!-- span -->
      <span class="input-group-text">
        <!-- i tag -->
        <i :class="icon"></i>
      </span>

      <!-- // icon: content paste in, icon is from the font awesome -->
    </div>

    <input
      class="form-control form-control-lg"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
      :class="{ 'is-invalid': errors }"
      :value="value"
    />
    <div v-if="errors" class="invalid-feedback">
      {{ errors }}
    </div>
  </div>
</template>

<script>
// icon: content paste in, icon is from the font awesome
// also the page structure need to change
//  + input

export default {
  name: "Social",
  props: {
    type: String,
    placeholder: String,
    name: String,
    errors: String,
    icon: String,
    value:String
  },
};
</script>

<style></style>
