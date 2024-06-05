FROM rust:latest as builder

# RUN apt-get update && apt-get install -y libssl-dev
RUN apt-get update && apt-get install -y libgconf-2-4

RUN ldconfig

WORKDIR /app

COPY . .
RUN cargo build --release --locked

FROM debian:bullseye-slim

EXPOSE 3110

WORKDIR /app

COPY --from=builder /app/target/release/engine .

CMD ["./engine"]
