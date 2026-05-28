dev:
    npm run start

build:
    npm run build

update-commands:
    claude "Please update docs/commands.mdx for the changes in ../esp/components/rust-boppo/src/commands.rs and ../device_software/libs/ten_os/src/commands.rs"

update-websocket:
    claude "Please update docs/websocket.mdx for the changes in ../esp/components/rust-boppo/src/actvities/websocket_server.rs"

update-wasm:
    claude "Please update docs/wasm.mdx for the changes in ../device_software/libs/boppo_wasm_runner/src/* and ../rust_boppo_wasm/src/*"
