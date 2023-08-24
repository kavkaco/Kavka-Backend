package sms_otp

import (
	"Kavka/config"
	"bytes"
	"fmt"
	"os"
	"strings"
	"text/template"
)

const TEMPLATE_FORMAT = "txt"

type SMSOtp struct {
	configs       *config.SMS
	templatesPath string
}

func NewSMSOtpService(configs *config.SMS, templatesPath string) *SMSOtp {
	return &SMSOtp{configs, templatesPath}
}

func (s *SMSOtp) SendSMS(msg string, receivers []string) error {
	if config.ENV == "devel" {
		fmt.Println("------ SMS Sent ------")
		fmt.Printf("msg: \n%s\n", strings.TrimSpace(msg))
		fmt.Println("--------------")
		fmt.Printf("receivers count: %d\n", len(receivers))
		fmt.Println("SMS Sent!")
		return nil
	}

	// TODO - Implement SMS sender for production

	return nil
}

// Parses and returns the template
func (s *SMSOtp) Template(name string, args interface{}) (string, error) {
	filename := fmt.Sprintf("%s/%s.%s", s.templatesPath, name, TEMPLATE_FORMAT)

	fileData, readErr := os.ReadFile(filename)
	if readErr != nil {
		return "", readErr
	}

	renderedFile := new(bytes.Buffer)

	t := template.Must(template.New(name).Parse(string(fileData)))
	t.Execute(renderedFile, args)

	return renderedFile.String(), nil
}