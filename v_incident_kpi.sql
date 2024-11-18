SELECT 
    line_name, 
    FORMAT(log_date,'yyyy-MM') AS log_date , 
    repair_time, 
    repair_count,
    work_days,
    Type AS Incident_type, 
    num  
FROM
    (
    SELECT
        line_name, 
        log_date, 
        repair_time, 
        repair_count,
        work_days,
        MTTR,
        MTBF
    FROM 
        [dbo].[v_incident_kpi]
    WHERE log_date >= DATEADD(MONTH,-14,GETDATE())
   
     
    )

    AS KPI_DATA
UNPIVOT
    (
    num FOR Type IN (MTTR, MTBF)
    ) AS KPI
WHERE Type = '${Incident_type}' 
ORDER BY log_date ASC