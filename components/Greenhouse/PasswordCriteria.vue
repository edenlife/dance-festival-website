<template>
  <div>
    <div class="sub-head">
      <span>Your password must have the following:</span>
    </div>
    <span v-for="(item, index) in passwordRequirements" :key="index">
      <el-radio
        v-if="criteriasMet.includes(Object.values(item)[0])"
        :ref="'requirement' + index"
        v-model="Object.values(item)[0]"
        :label="Object.values(item)[0]"
        class="requirement-list"
        :disabled="!criteriasMet.includes(Object.values(item)[0])"
        >{{ Object.values(item)[0] }}</el-radio
      >
      <el-radio
        v-else
        :ref="'requirement' + index"
        :label="Object.values(item)[0]"
        class="requirement-list"
        :disabled="!criteriasMet.includes(Object.values(item)[0])"
        >{{ Object.values(item)[0] }}</el-radio
      >
    </span>
  </div>
</template>

<script>
export default {
  name: 'PasswordCriteria',
  components: {},
  props: {
    password: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      passwordRequirements: [
        { lengthRegEx: 'At least 8 characters' },
        { upperCaseRegEx: 'At least 1 uppercase letter' },
        { lowerCaseRegEx: 'At least 1 lowercase letter' },
        { numberRegEx: 'At least 1 number' },
        { specialRegEx: 'At least 1 special character (eg. @ ? # ! &)' },
      ],
      criteriasMet: [],
      regExObj: {
        lengthRegEx: new RegExp('^(?=.{8,})'),
        lowerCaseRegEx: new RegExp('^(?=.*[a-z])'),
        upperCaseRegEx: new RegExp('^(?=.*[A-Z])'),
        numberRegEx: new RegExp('^(?=.*[0-9])'),
        specialRegEx: new RegExp('^(?=.*[!@#$%^&*|<>:{}()?])'),
      },
    }
  },
  watch: {
    password() {
      this.validate(this.password)
    },
  },
  methods: {
    validate(password) {
      this.passwordRequirements.map((requirement) => {
        const regEx = Object.keys(requirement)[0]
        if (this.regExObj[regEx].test(password) === true) {
          if (!this.criteriasMet.includes(requirement[regEx])) {
            this.criteriasMet.push(requirement[regEx])
            if (this.criteriasMet.length === this.passwordRequirements.length) {
              this.$emit('success', false)
            }
          }
        } else {
          this.criteriasMet = this.criteriasMet.filter((criteria) => {
            if (criteria !== requirement[regEx]) {
              return criteria
            }
          })
          if (this.criteriasMet.length !== this.passwordRequirements.length) {
            this.$emit('success', true)
          }
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/greenhouse/main.scss';
.requirement-list {
  margin-top: 8px;
  color: #4b6358;
  display: block;
}
</style>
