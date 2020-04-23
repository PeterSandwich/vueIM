<template>
    <div class="mtl_inp_container">
        <div class="mtl_inp_raw_in mtl_inp_raw_in_extra" 
        ref="editor" contenteditable="true" 
        spellcheck="false"
        placeholder="给 @captain seagle 发信息" 
        @keydown="mutli_input_keydown($event)"
       
        >
        </div>
    </div>
</template>

<script>
export default {
    name: 'mutliline_input',
    props: ['value'],
    data: function(){
        return{
        }
    },
    methods: {

        addemj(e){
            let inputTxt = this.$refs.editor;
            if(inputTxt.lastElementChild){
                inputTxt.lastElementChild.innerText += e
                inputTxt.lastElementChild.focus()
                inputTxt.innerHTML = _.replace(inputTxt.innerHTML, /<span>/g, '')
                inputTxt.innerHTML = _.replace(inputTxt.innerHTML, /<\/span>/g, '')
                inputTxt.innerHTML = _.replace(inputTxt.innerHTML, /<br>/g, '')
                this.placeCaretAtEnd(inputTxt.lastElementChild);
            }else{
                this.$refs.editor.innerHTML += e
                inputTxt.innerHTML = _.replace(inputTxt.innerHTML, /<span>/g, '')
                inputTxt.innerHTML = _.replace(inputTxt.innerHTML, /<\/span>/g, '')
                inputTxt.innerHTML = _.replace(inputTxt.innerHTML, /<br>/g, '')
            }
            
            
            
        },
        mutli_input_keydown(evt){
            let inputTxt = this.$refs.editor;
            if ((evt.ctrlKey) && evt.which == 13) {
                inputTxt.innerHTML+='<div><br></div>';
                this.placeCaretAtEnd(inputTxt.lastElementChild);
                inputTxt.scrollTop = 10000
                return false;
            }else if(evt.which==13){
                this.$emit('send',inputTxt.innerHTML)
                evt.preventDefault();
                inputTxt.innerHTML = ''
                return false;
            }
            
        },
        placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined"
                && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
            else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }
        },
        enterToSend(){
            let inputTxt = this.$refs.editor;
            this.$emit('send',inputTxt.innerHTML)
            inputTxt.innerHTML = ''
        },
        click_to_focus(){
            
        }
    }
}
</script>

<style>
.mtl_inp_container{
    width: 100%;
    height: 100%;
    background-color: rgb(59, 61, 63);
}

.mtl_inp_raw_in{
    width: 100%;
    height: 100%;
    min-height: 44px;
    max-height: 144px;
    outline: none;
    border: none;
    padding: 8px 6px 0 8px;
    overflow-wrap: break-word;
    font-size: 18px;
    color: rgb(204, 204, 204);
    overflow: hidden;
    overflow-y:scroll;
    border-left: 1px solid rgb(46, 46, 46);
}

.mtl_inp_raw_in::-webkit-scrollbar{
    width: 4px;
    border-radius: 8px;
}

.mtl_inp_raw_in::-webkit-scrollbar-thumb{
    border-radius: 8px;
    width: 4px;
    box-shadow: 4px 0 0 #212225 inset;
}
</style>