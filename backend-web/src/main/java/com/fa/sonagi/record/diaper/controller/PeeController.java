package com.fa.sonagi.record.diaper.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.record.diaper.service.PeeService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Pee", description = "소변 API")
@RequestMapping("/api/pees")
@RestController
@RequiredArgsConstructor
public class PeeController {

  private final PeeService peeService;

  /**
   * 소변 기록 조회
   */
  @GetMapping("/{peeId}")
  public ResponseEntity<?> getPee(@PathVariable Long peeId) {
    DiaperResDto diaperResDto = peeService.findPeeById(peeId);
    return ResponseEntity.ok().body(diaperResDto);
  }

  /**
   * 소변 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registPee(@RequestBody DiaperPostDto diaperPostDto) {
    DiaperResDto diaperResDto = peeService.registPee(diaperPostDto);
    return ResponseEntity.ok().body(diaperResDto);
  }

  /**
   * 소변 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updatePee(@RequestBody DiaperPutDto diaperPutDto) {
    peeService.updatePee(diaperPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 소변 기록 삭제
   */
  @DeleteMapping("/{peeId}")
  public ResponseEntity<?> deletePee(@PathVariable Long peeId) {
    peeService.deletePeeById(peeId);
    return ResponseEntity.ok().build();
  }
}