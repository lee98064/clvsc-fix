<template></template>

<script>
import { apiUserLogout } from "../../api";
export default {
    created() {
        apiUserLogout()
            .then((res) => {
                localStorage.removeItem("name");
                localStorage.removeItem("admin");
                this.$router.push({ path: "/" });
            })
            .catch((err) => {
                this.$router.push({ path: "/" });
            });
    },
};
</script>
