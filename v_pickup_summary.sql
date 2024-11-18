With T1 AS(SELECT 
PdLineName,
CASE WHEN PdLineName = 'SMT_A' THEN 'A LINE'
     WHEN PdLineName = 'SMT_B' THEN 'B LINE'
     WHEN PdLineName = 'SMT_E' THEN 'E LINE'
     ELSE 'Others'
END AS Production_line,
EquipmentName,
SUM(TotalPickUpCount) AS Totalpickup,
SUM(TotalMiss) AS TotalMiss,
AVG(CAST(TotalMiss AS FLOAT) / TotalPickUpCount) AS PickupRate,
DateTimeCode
FROM
[dbo].[v_pickup_summary]
WHERE DateTimeCode >= DATEADD(HOUR, -72, GETDATE())
GROUP BY 
PdLineName,
EquipmentName,
DateTimeCode,
TotalMiss,
TotalPickUpCount
ORDER BY
DateTimeCode
DESC),
T2 AS(
SELECT 
PdLineName,
CASE WHEN PdLineName = 'SMT_A' THEN 'A LINE'
     WHEN PdLineName = 'SMT_B' THEN 'B LINE'
     WHEN PdLineName = 'SMT_E' THEN 'E LINE'
     ELSE 'Others'
END AS Production_line,
EquipmentName,
SUM(TotalPickUpCount) AS Totalpickup,
SUM(TotalMiss) AS TotalMiss,
AVG(CAST(TotalMiss AS FLOAT) / TotalPickUpCount) AS PickupRate,
DateTimeCode
FROM
[dbo].[v_pickup_summary]
WHERE DateTimeCode >= DATEADD(HOUR, -48, GETDATE())
GROUP BY 
PdLineName,
EquipmentName,
DateTimeCode,
TotalMiss,
TotalPickUpCount
ORDER BY
DateTimeCode
DESC
),
T3 AS(
SELECT 
PdLineName,
CASE WHEN PdLineName = 'SMT_A' THEN 'A LINE'
     WHEN PdLineName = 'SMT_B' THEN 'B LINE'
     WHEN PdLineName = 'SMT_E' THEN 'E LINE'
     ELSE 'Others'
END AS Production_line,
EquipmentName,
SUM(TotalPickUpCount) AS Totalpickup,
SUM(TotalMiss) AS TotalMiss,
AVG(CAST(TotalMiss AS FLOAT) / TotalPickUpCount) AS PickupRate,
DateTimeCode
FROM
[dbo].[v_pickup_summary]
WHERE DateTimeCode >= DATEADD(HOUR, -72, GETDATE())
GROUP BY 
PdLineName,
EquipmentName,
DateTimeCode,
TotalMiss,
TotalPickUpCount
ORDER BY
DateTimeCode
DESC
)
SELECT *
FROM 
    (SELECT * FROM T1 WHERE DATENAME(weekday,GETDATE())='Monday'
    UNION ALL
    SELECT * FROM T2 WHERE DATENAME(weekday,GETDATE())='Sunday'
    UNION ALL
    SELECT * FROM T3 WHERE DATENAME(weekday,GETDATE()) NOT IN ('Monday', 'Sunday')) AS CombinedResults;