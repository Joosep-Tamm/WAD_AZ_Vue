<template>
    <div>
        <form @submit.prevent="validatePassword">
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
        <p v-if="error">{{ error }}</p>
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
