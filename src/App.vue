<script>
import LoginPage from './views/LoginPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import DashboardPage from './views/DashboardPage.vue'
import NavbarPage from './views/NavbarPage.vue'
import LodgingsPage from './views/LodgingsPage.vue'
import TypesPage from './views/TypesPage.vue'
import HistoryPage from './views/HistoryPage.vue'
import AddEditLodgingPage from './views/AddEditLodgingPage.vue'
import AddEditTypePage from './views/AddEditTypePage.vue'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// const SERVER_URL = 'http://localhost:3000'
const SERVER_URL = 'https://server-turu.annisa-rachma.com'

export default {
  components: {
    LoginPage,
    RegisterPage,
    DashboardPage,
    NavbarPage,
    LodgingsPage,
    TypesPage,
    HistoryPage,
    AddEditLodgingPage,
    AddEditTypePage
  },
  data() {
    return {
      currentPage: '',
      username: localStorage.getItem('username'),
      role: localStorage.getItem('role'),
      lodgings: [],
      types: [],
      histories: [],
      authorId: localStorage.getItem('id'),
      lodgingByIdData: null,
      typeByIdData: null
    }
  },
  methods: {
    changePage(page, lodgingById) {
      // console.log(lodgingById);
      if (lodgingById) {
        this.fetchLodgingById(+lodgingById)
      } else {
        this.currentPage = page
        this.lodgingByIdData = null
      }
      // this.lodgingById = lodgingById
    },
    async changeStatus(status, id) {
      // console.log(status, id)
      try {
        await axios({
          url: `${SERVER_URL}/lodgings/${id}`,
          method: 'PATCH',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            status: status
          }
        })
        toast.success(`Successfuly change lodging status`)
        this.fetchLodgings()
        this.fetchHistories()
      } catch (err) {
        console.log(err)
      }
    },
    async handleLogin({ email, password }) {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/login`,
          method: 'POST',
          data: { email, password }
        })

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('id', data.id)
        localStorage.setItem('role', data.role)
        localStorage.setItem('username', data.username)

        this.username = localStorage.getItem('username')
        this.role = localStorage.getItem('role')

        toast.success('Login successful')

        this.changePage('dashboard-section')
        this.fetchLodgings()
        this.fetchTypes()
        this.fetchHistories()
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async handleLoginGoogle(response) {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/google-signin`,
          method: 'POST',
          headers: {
            google_token: response.credential
          }
        })

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('id', data.id)
        localStorage.setItem('role', data.role)
        localStorage.setItem('username', data.username)

        this.username = localStorage.getItem('username')
        this.role = localStorage.getItem('role')

        toast.success('Login successful')

        this.changePage('dashboard-section')
        this.fetchLodgings()
        this.fetchTypes()
        this.fetchHistories()
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async handleRegister({ username, email, password, phoneNumber, address }) {
      try {
        await axios({
          url: `${SERVER_URL}/register`,
          method: 'POST',
          data: { username, email, password, phoneNumber, address }
        })
        toast.success('Register successful, please login')
        this.changePage('login-section')
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async handleLogout() {
      try {
        localStorage.clear()
        this.changePage('login-section')
      } catch (err) {
        console.log(err)
      }
    },
    async fetchLodgings() {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/lodgings`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.lodgings = data.lodging
        // console.log(this.lodgings)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchTypes() {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/types`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.types = data.type
        // console.log(data.type)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchHistories() {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/histories`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data)
        this.histories = data.histories
        // this.fetchHistories()
      } catch (err) {
        console.log(err)
      }
    },
    async handleAddLodging({
      name,
      location,
      typeId,
      facility,
      roomCapacity,
      price,
      imgUrl,
      authorId
    }) {
      try {
        await axios({
          url: `${SERVER_URL}/lodgings`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            name,
            location,
            typeId,
            facility,
            roomCapacity,
            price,
            imgUrl,
            authorId
          }
        })

        toast.success(`Successfuly added new lodging`)

        this.changePage('lodgings-section')
        this.fetchLodgings()
        this.fetchHistories()
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async handleEditLodging(
      { name, location, typeId, facility, roomCapacity, price, imgUrl, authorId },
      id
    ) {
      try {
        await axios({
          url: `${SERVER_URL}/lodgings/${id}`,
          method: 'PUT',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            name,
            location,
            typeId,
            facility,
            roomCapacity,
            price,
            imgUrl,
            authorId
          }
        })
        toast.success(`Successfuly edit lodging`)

        this.changePage('lodgings-section')
        this.fetchLodgings()
        this.fetchHistories()
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async fetchLodgingById(id) {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/lodgings/${id}`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data)
        this.lodgingByIdData = data.lodging
        this.currentPage = 'add-edit-lodging-section'
      } catch (err) {
        console.log(err)
      }
    },
    changePageType(page, typeById) {
      // console.log(typeById);
      if (typeById) {
        this.fetchTypeById(+typeById)
      } else {
        this.currentPage = page
        this.typeByIdData = null
      }
      // this.lodgingById = lodgingById
    },
    async fetchTypeById(id) {
      try {
        const { data } = await axios({
          url: `${SERVER_URL}/types/${id}`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data)
        this.typeByIdData = data.type
        this.currentPage = 'add-edit-type-section'
      } catch (err) {
        console.log(err)
      }
    },
    async handleAddType({ name }) {
      try {
        await axios({
          url: `${SERVER_URL}/types`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: { name }
        })
        toast.success(`Successfuly added new type`)
        this.changePage('types-section')
        this.fetchTypes()
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async handleEditType({ name }, id) {
      try {
        await axios({
          url: `${SERVER_URL}/types/${id}`,
          method: 'PUT',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: { name }
        })
        toast.success(`Successfuly edit type`)
        this.changePage('types-section')
        this.fetchTypes()
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err)
      }
    },
    async handleDeleteType(id) {
      try {
        await axios({
          url: `${SERVER_URL}/types/${id}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        toast.error(`Successfuly delete type`)
        this.changePage('types-section')
        this.fetchTypes()
      } catch (err) {
        console.log(err)
      }
    }
  },

  created() {
    if (localStorage.getItem('access_token')) {
      this.changePage('dashboard-section')
      this.fetchLodgings()
      this.fetchTypes()
      this.fetchHistories()
    } else {
      this.changePage('login-section')
    }
  }
}
</script>

<template>
  <NavbarPage
    @changePage="changePage"
    @handleLogout="handleLogout"
    :currentPage="currentPage"
    v-if="currentPage !== 'login-section' && currentPage !== 'register-section'"
  />
  <LoginPage
    @handleLogin="handleLogin"
    @handleLoginGoogle="handleLoginGoogle"
    @changePage="changePage"
    v-if="currentPage == 'login-section'"
  />
  <RegisterPage
    @handleRegister="handleRegister"
    @changePage="changePage"
    v-if="currentPage == 'register-section'"
  />
  <DashboardPage
    :totalLodging="lodgings.length"
    :totalType="types.length"
    :username="username"
    :role="role"
    v-if="currentPage == 'dashboard-section'"
  />
  <LodgingsPage
    @changePage="changePage"
    @changeStatus="changeStatus"
    :username="username"
    :role="role"
    :lodgings="lodgings"
    v-if="currentPage == 'lodgings-section'"
  />
  <TypesPage
    @changePageType="changePageType"
    @handleDeleteType="handleDeleteType"
    :types="types"
    :typeByIdData="typeByIdData"
    :username="username"
    :role="role"
    v-if="currentPage == 'types-section'"
  />
  <HistoryPage
    :histories="histories"
    :username="username"
    :role="role"
    v-if="currentPage == 'history-section'"
  />
  <AddEditLodgingPage
    @handleAddLodging="handleAddLodging"
    @handleEditLodging="handleEditLodging"
    @changePage="changePage"
    :types="types"
    :username="username"
    :role="role"
    :authorId="authorId"
    :lodgingByIdData="lodgingByIdData"
    v-if="currentPage == 'add-edit-lodging-section'"
  />
  <AddEditTypePage
    @handleAddType="handleAddType"
    @handleEditType="handleEditType"
    @changePageType="changePageType"
    :typeByIdData="typeByIdData"
    :username="username"
    :role="role"
    v-if="currentPage == 'add-edit-type-section'"
  />
</template>
