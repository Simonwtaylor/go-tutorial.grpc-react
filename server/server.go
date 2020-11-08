package main

import (
	"fmt"
	"log"
	"net"

	"github.com/Simonwtaylor/go-tutorial.grpc-react/data"
	"github.com/Simonwtaylor/go-tutorial.grpc-react/protos/chat"
	"google.golang.org/grpc"
)

type server struct {
	Chat *data.ChatData
}

func (*server) GetChat(req *chat.ChatRequest, stream chat.Chat_GetChatServer) error {
	fmt.Println("GetChat invoked")
	return nil
}

func main() {
	chatServer := data.NewChatData()
	lis, err := net.Listen("tcp", "0.0.0.0:8000")

	if err != nil {
		log.Fatalln("Error whilst listening:", err)
	}

	s := grpc.NewServer()

	chat.RegisterChatServer(s, &server{Chat: chatServer})
	log.Printf("Starting server in port :%d\n", 8000)

	if err := s.Serve(lis); err != nil {
		log.Fatalln("Error whilst server", err)
	}
}
