FROM rust:latest as builder

WORKDIR /usr/src/feed

RUN apt-get update && \
    apt-get install -y libssl-dev

COPY Cargo.toml Cargo.lock ./
RUN mkdir src && touch src/lib.rs
RUN cargo build --release

COPY . .
RUN cargo build --release

FROM debian:buster-slim

EXPOSE 3110

WORKDIR /usr/bin/

COPY --from=builder /usr/src/feed/target/release/engine .

CMD ["./engine"]
