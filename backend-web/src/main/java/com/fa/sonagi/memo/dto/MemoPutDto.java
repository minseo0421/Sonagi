package com.fa.sonagi.memo.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemoPutDto {
	@NotNull
	private Long id;

	@NotNull
	private String memo;
}
