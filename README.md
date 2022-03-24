Running the nodejs script with the wasm dependency works fine:

```bash
❯ bazel run //:hello_bin
INFO: Analyzed target //:hello_bin (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
Target //:hello_bin up-to-date:
  bazel-bin/hello_bin.sh
  bazel-bin/hello_bin_loader.js
  bazel-bin/hello_bin_require_patch.js
INFO: Elapsed time: 0.148s, Critical Path: 0.00s
INFO: 1 process: 1 internal.
INFO: Build completed successfully, 1 total action
INFO: Build completed successfully, 1 total action
Hello PG
```

But building the genrule that uses this nodejs script fails:

```bash
❯ bazel build //:hello_gen
INFO: Analyzed target //:hello_gen (1 packages loaded, 472 targets configured).
INFO: Found 1 target...
ERROR: /Users/pgherveou/Github/wasm-repro-genrule/BUILD.bazel:36:18: Generating WebAssembly bindings for //:hello_world_lib_wasm... [for host] failed: (Exit 1): cargo_bin_wasm_bindgen failed: error executing command bazel-out/host/bin/external/rules_rust_wasm_bindgen__wasm_bindgen_cli__0_2_78/cargo_bin_wasm_bindgen --target nodejs --out-dir bazel-out/host/bin --out-name hello_wasm_bindgen ... (remaining 1 argument skipped)

Use --sandbox_debug to see verbose messages from the sandbox
error: failed to read `bazel-out/host/bin/libhello_world_lib_wasm.dylib`

Caused by:
    input bytes aren't valid utf-8
Target //:hello_gen failed to build
Use --verbose_failures to see the command lines of failed build steps.
ERROR: /Users/pgherveou/Github/wasm-repro-genrule/BUILD.bazel:22:14 Middleman _middlemen/hello_Ubin.sh-runfiles failed: (Exit 1): cargo_bin_wasm_bindgen failed: error executing command bazel-out/host/bin/external/rules_rust_wasm_bindgen__wasm_bindgen_cli__0_2_78/cargo_bin_wasm_bindgen --target nodejs --out-dir bazel-out/host/bin --out-name hello_wasm_bindgen ... (remaining 1 argument skipped)

Use --sandbox_debug to see verbose messages from the sandbox
INFO: Elapsed time: 0.285s, Critical Path: 0.03s
INFO: 2 processes: 2 internal.
FAILED: Build did NOT complete successfully
```
