package com.fa.sonagi.immunization.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.immunization.dto.CheckupPutDto;
import com.fa.sonagi.immunization.dto.CheckupResDto;
import com.fa.sonagi.immunization.service.CheckupService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/checkup")
@Tag(name = "Checkup", description = "건강검진 API")
@RestController
@RequiredArgsConstructor
public class CheckupController {
	private final CheckupService checkupService;

	/**
	 * 건강검진 리스트 조회
	 */
	@GetMapping("/{babyId}")
	public List<CheckupResDto> findCheckupList(@PathVariable Long babyId) {
		return checkupService.findCheckupList(babyId);
	}

	/**
	 * 건강검진일 등록, 수정
	 */
	@PutMapping
	public ResponseEntity<?> updateCheckupDate(@RequestBody CheckupPutDto checkupPutDto) {
		checkupService.updateCheckupDate(checkupPutDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * 건강검진 상세 정보 조회
	 */
	@GetMapping("/{babyId}/{checkupId}")
	public ResponseEntity<?> findCheckup(@PathVariable Long babyId, @PathVariable Long checkupId) {
		CheckupResDto checkupResDto = checkupService.findCheckup(babyId, checkupId);
		return ResponseEntity.ok().body(checkupResDto);
	}
}
