package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;

public interface MilkRepositoryCustom {
	MealResDto findMilkRecord(Long milkId);

	List<MealStatisticsQueryDto> findMilkByDay(Long babyId, LocalDate createdDate);

	Long findMilkCnt(Long babyId, LocalDate createdDate);

	Long findMilkAmount(Long babyId, LocalDate createdDate);
}
