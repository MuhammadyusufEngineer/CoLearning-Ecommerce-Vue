/**
* @param {*} el_target_ref The root element for which clicking outside will trigger callback_fn
* @param {*} callback_fn The function to call when user clicks outside of 
* @returns 
*/

import { onMounted } from "vue";

export function useClickOutside (el_target_ref, callback_fn) {
    if( !el_target_ref ) return;

    let listener = (e) => {
        if(e.target == el_target_ref.value || e.composedPath().includes(el_target_ref.value)) {
            return
            // We clicked inside modal region
        }
        if( typeof callback_fn == 'function' ) {
            callback_fn()
        }
    }

    onMounted( ()=> {
        window.addEventListener('click', listener)
    })
    onBeforeUnmount( ()=> {
        window.removeEventListener('click', listener)
    })
    return {
        listener
    }
} 
