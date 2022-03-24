use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greeting(name: &str) -> String {
    format!("Hello {}", name)
}

