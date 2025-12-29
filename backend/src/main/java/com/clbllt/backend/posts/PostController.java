package com.clbllt.backend.posts;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/posts")
public class PostController {
  private final PostRepository repository;

  public PostController(PostRepository repository) {
    this.repository = repository;
  }

  @GetMapping
  public List<Post> list() {
    return repository.findAll();
  }

  @GetMapping("/{id}")
  public Post get(@PathVariable Long id) {
    return repository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));
  }

  @PostMapping
  public ResponseEntity<Post> create(@Valid @RequestBody PostRequest request) {
    Post post = new Post();
    post.setTitle(request.getTitle());
    post.setContent(request.getContent());
    Post saved = repository.save(post);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }

  @PutMapping("/{id}")
  public Post update(@PathVariable Long id, @Valid @RequestBody PostRequest request) {
    Post post = repository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));
    post.setTitle(request.getTitle());
    post.setContent(request.getContent());
    return repository.save(post);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    if (!repository.existsById(id)) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
    }
    repository.deleteById(id);
    return ResponseEntity.noContent().build();
  }
}
