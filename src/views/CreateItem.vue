<template>
    <div class="app-collect">
        <header>
            <router-link to="/collectCreate">新建收藏</router-link>
        </header>

        <ul class="collect-main">
            <li class="main-item" v-for="item in collecData" :key="item.id">
                <a :href="item.link">{{item.title}}</a>
                <div>
                    <router-link :to="{path:'/collectEdit',query:{id:item.id}}">编辑</router-link>
                    <button @click="deleteCollect(item.id)">删除</button>
                </div>
                
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            collecData: []
        };
    },
    methods: {
        getCollect() {
            axios
                .get("http://localhost:7002/api/collect",{
                    params:{
                        limit:2
                    }
                })
                .then(response => {
                    console.log(response);
                    this.collecData = response.data.data.rows;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteCollect(id){
            axios
                .delete("http://localhost:7002/api/collect/" + id)
                .then(response => {
                    console.log(response);
                    this.getCollect();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getCollect();
    }
};
</script>
