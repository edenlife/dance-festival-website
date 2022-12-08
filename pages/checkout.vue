<template>
  <div class="checkout">
    <span><i class="el-icon-arrow-left" /> Back</span>
    <el-row class="sections" :gutter="70">
      <el-col :md="12" :lg="12" :sm="24">
        <p class="title">Your Information</p>
        <p class="description">
          Please enter your information to create an account in other to
          complete your order.
        </p>
        <info-box>
          <span class="info__text">
            Note that information provided here can be used to login on the app
            for a more robust experience.
          </span>
        </info-box>
        <el-form
          ref="form_profile"
          v-loading="fetching"
          :model="form"
          label-position="top"
        >
          <el-row :gutter="20">
            <el-col :md="24">
              <el-form-item label="Email address" prop="email">
                <el-input v-model="form.email" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12">
              <el-form-item
                label="First name"
                prop="first_name"
                :rules="validateName()"
              >
                <el-input v-model="form.first_name" type="text"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item
                label="Last name"
                prop="last_name"
                :rules="validateName()"
              >
                <el-input v-model="form.last_name" type="text"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="24">
              <el-form-item label="Phone Number" prop="phone_number">
                <el-input v-model="form.phone_number" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="24">
              <el-form-item label="Password" prop="password">
                <el-input v-model="form.password" type="text" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-button class="w-100" type="primary"
                >Proceed to payment</el-button
              >
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :md="12" :lg="12" :sm="24">
        <OrderSummary />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OrderSummary from '@/components/dance-festival/OrderSummary.vue'
import InfoBox from '@/components/dance-festival/InfoBox.vue'
import validations from '~/mixins/validations'

export default {
  components: {
    OrderSummary,
    InfoBox,
  },
  mixins: [validations],
  data: () => ({
    form: {
      email: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      password: '',
    },
  }),
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

.w-100 {
  width: 100%;
}

.checkout {
  padding: 130px 130px;
  @include respond(md) {
    padding: 90px 10px 80px 10px;
  }

  .sections {
    @include respond(md) {
    }
  }

  .title {
    @include font-size(lg);
    color: color(eden-neutral-1);
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .description {
    font-style: italic;
    color: color(eden-neutral-1);
    margin-bottom: 30px;
  }

  .info__text {
    @include font-size(sm);
  }
}
</style>
