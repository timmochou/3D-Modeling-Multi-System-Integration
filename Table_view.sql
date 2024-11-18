WITH T1 AS(
    SELECT
    Datecode,
    Production_Line,
    'Production_Line' AS TYPE,
    0 AS NUM,
    CAST(Production_Line AS VARCHAR(255)) AS Value
FROM
    (
    SELECT 
        Datecode,
        Line AS Production_Line,
        ACT_OEE,
        CAP_OEE,
        TIME_EFF,
        NOTIME_EFF,
        CAP_EFF,
        CAST(YieldRate AS float) AS YieldRate,
        NOSCHE_TIME
    FROM
        dbo.v_pdline_oee_summary
    WHERE 
        FORMAT(Datecode, 'yyyy-MM') >= FORMAT(GETDATE(), 'yyyy-MM')
    ) AS OEE_SUMMARY
UNION ALL
SELECT
    Datecode,
    Production_Line,
    TYPE,
    NUM,
    CAST(NUM AS VARCHAR(255)) AS Value
FROM
    (
    SELECT 
        Datecode,
        Line AS Production_Line,
        ACT_OEE,
        CAP_OEE,
        TIME_EFF,
        NOTIME_EFF,
        CAP_EFF,
        CAST(YieldRate AS float) AS YieldRate,
        NOSCHE_TIME
    FROM
        dbo.v_pdline_oee_summary
    WHERE 
        FORMAT(Datecode, 'yyyy-MM') >= FORMAT(GETDATE(), 'yyyy-MM')
    ) AS OEE_SUMMARY
UNPIVOT
    (
    NUM FOR TYPE IN (ACT_OEE, CAP_OEE, TIME_EFF, NOTIME_EFF, NOSCHE_TIME, CAP_EFF, YieldRate)
    ) AS OEE_SUMMARY_UNPIVOT
)
SELECT 
Datecode,
Production_Line,
TYPE,
NUM,
Value
FROM T1
ORDER BY Datecode,Production_Line DESC ,
CASE 
        WHEN TYPE = 'Production_Line' THEN 1
        WHEN TYPE = 'ACT_OEE' THEN 2
        WHEN TYPE = 'CAP_OEE' THEN 3
        WHEN TYPE = 'TIME_EFF' THEN 4
        WHEN TYPE = 'NOTIME_EFF' THEN 5
        WHEN TYPE = 'NOSCHE_TIME' THEN 6
        WHEN TYPE = 'CAP_EFF' THEN 7
        WHEN TYPE = 'YieldRate' THEN 8
        ELSE 9
END;
