FROM rust:latest as builder

WORKDIR /usr/src/feed

COPY . .

RUN cargo build --release

FROM debian:buster-slim

EXPOSE 3110

WORKDIR /usr/bin/

COPY --from=builder /usr/src/feed/target/release/engine .

CMD ["./feed"]
