package projetoIntegrador.g5.demo.exceptions.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import projetoIntegrador.g5.demo.exceptions.ExceptionResponse;
import projetoIntegrador.g5.demo.exceptions.ResourceNotFindException;

import java.util.Date;

@ControllerAdvice
@RestController
public class exceptionHandler {

    @ExceptionHandler(ResourceNotFindException.class)
    public final ResponseEntity<ExceptionResponse> handlerAllExceptionsNotFound(Exception ex, WebRequest request){
        ExceptionResponse exceptionResponse = new ExceptionResponse(
                new Date(), ex.getMessage(), request.getDescription(false));

        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }


}
