<template>
    <div>
        <div class="form">
        <p>
            <label for="sff">hosts文件路径</label>
            <input type="text" v-model="hostsPath" id="sff">
        </p>
        <p>
            <label for="sff1">ip</label>
            <input type="text" v-model="ip" id="sff1">
        </p>
        <p>
            <label for="sff2">host</label>
            <input type="text" v-model="host" id="sff2">
        </p>
        <p>
            <button @click="save('set')">设置</button>
            <button @click="save('remove')">删除</button>
        </p>
        </div>
        <ul>
            <li v-for="(host, index) in hosts" :key="index"
            >{{host}}</li>
        </ul>
        

        <div class="error" v-if="error" @click="error = ''">
            <p>{{error}}</p>
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hostsPath: localStorage.getItem('hostsPath') || '/etc/hosts',
            ip: '127.0.0.1',
            host: 'localhost',
            hosts: [],
            msg: '',
            error: ''
        }
    },
    mounted(){
        this.list()
    },
    methods: {
        save(action){
            this.request(action, ['hostsPath', 'ip', 'host']).then(() => {
                this.list()
            })
        },
        getParams(keys){
            return keys.map(key => {
                return `${key}=${encodeURIComponent(this[key])}`
            }).join('&')
        },
        list(){
            return this.request('list', ['hostsPath']).then((data) => {
                this.hosts = data;
            })
        },
        request(action, params){
            return fetch(`/hosts/${action}?${this.getParams(params)}`, {
                mode: 'cors'
            }).then(res => res.json()).then(res => {
                if(res.code){
                    return Promise.reject(res)
                } else {
                    return res.data;
                }
            }).catch(error => {
                if(error instanceof Error){
                    this.error = error;
                } else {
                    this.error = error.msg;
                    this.msg = error.error;
                }
            })
        },
    }
}
</script>

<style scoped>
ul, .form{
    margin: 0 auto;
    width: 500px;
}
.form{
    margin-top: 100px;
    text-align: center;
}
.form input[type="text"]{
    min-width: 300px;
}
.error{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1001;
    background: rgba(0, 0, 0, .3);
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.error p{
    flex: 0 0 100%;
}
</style>
