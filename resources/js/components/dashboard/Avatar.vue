<template>
    <div>
        <div class="base-image-input" :style="{ 'background-image': `url(${imageData}`}" @click="chooseImage">
            <span>
                choose image
            </span>
            <input type="file" name="" ref="fileinput" id="" @input="onSelectFile">
        </div>
<!--
            <input id="imageUpload"   v-on:click="clicked($event)" type="file"
            name="profile_photo" placeholder="Photo" required="" capture>
            <input type="image" :src="pathToImage" alt=""> -->



    </div>
</template>

<script>
    export default {
        data() {
            return {
                image: '',
               imageData: null

            }
        },
        methods: {
            clicked(event){
                console.log(event.target.value);
                this.$data.pathToImage = event.target.value;
            //     const fileReader = new FileReader();
            //    fileReader.onload = (event)=>{
            //        console.log(event.target.files['0'].file)
            //    }

            //    fileReader.readAsBinaryString(event.target.files['0'].file);
                // console.log(this.$refs.file.attributes.src);
                // console.log(event.target.files);
                // if(event.target.files['0'].name === undefined){

                // }else{
                //     this.$refs.file.attributes.src= event.target.files['0'].name;
                // }
                // this.$refs.file.attributes.src.nodeValue = event.files['0'].file.name
            },
            insertAvatar() {
                submit
                axios.post('/api/avatar').then((resp)=> console.log('avatar uploaded'))
            },
            onSelectFile(event){
                this.$data.imageData = event.target.value;
            },
            chooseImage(){
                this.$refs.fileInput;
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>
