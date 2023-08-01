package com.fa.sonagi.record.sleep.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepPutDto {

	@NotNull
	private Long id;

	@NotNull
	private Time createdTime;

	@NotNull
	private Time endTime;
	private String memo;
}