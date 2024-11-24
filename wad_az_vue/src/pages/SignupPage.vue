<template>
    <div class="form-wrapper">
        <form @submit.prevent="validatePassword">
            <div class="side-by-side">
                <p class="form-label">Username</p>
                <input class= "form-input" v-model="username" type="text" placeholder="Username" required />
            </div>
            
            <div class="side-by-side">
                <p class="form-label">Password</p>
                <input class= "form-input" v-model="password" type="password" placeholder="Password" required />
            </div>
            <button class= "submit-button" type="submit">Sign Up</button>
        </form>
        <p class="error" v-if="error">{{ error }}</p>
    </div>
    <div class="empty-space">
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
        };
    },
    methods: {
        validatePassword() {
            const conditions = [];
            if (this.password.length < 8 || this.password.length > 15) {
                conditions.push('length (8-15 characters)');
            }
            if (!/[A-Z]/.test(this.password)) {
                conditions.push('one uppercase letter');
            }
            if (!/[a-z]{2}/.test(this.password)) {
                conditions.push('at least two lowercase letters');
            }
            if (!/[0-9]/.test(this.password)) {
                conditions.push('one numeric value');
            }
            if (!/^[A-Z]/.test(this.password)) {
                conditions.push('start with uppercase');
            }
            if (!/_/.test(this.password)) {
                conditions.push('the character "_"');
            }

            if (conditions.length) {
                this.error = `Password invalid: ${conditions.join(', ')}`;
            } else {
                this.error = '';
                alert('Signup successful!');
            }
        },
    },
};
</script>
