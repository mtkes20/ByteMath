FROM maven:3.9.2-amazoncorretto-17 as builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

FROM openjdk:17-slim
WORKDIR /app
COPY --from=builder /app/target/bytemath-service-0.0.1-SNAPSHOT.jar bytemath-service.jar
ENTRYPOINT ["java","-jar","bytemath-service.jar"]
