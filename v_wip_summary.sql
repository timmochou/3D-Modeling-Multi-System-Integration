SELECT
    FORMAT(datecode,'yyyy-MM') AS Year_Month,
    datecode AS DATE,
    process_name,
    line,
    qty,
    TYPE
FROM
    (
    SELECT
        datecode, 
        process_name,
        line,
        plan_mo_qty ,
        act_mo_qty,
        hit_rate
    FROM 
        dbo.v_production_hit_summary
    ) AS HIT_RATE_PIVOT
UNPIVOT
    (
    qty FOR TYPE IN ([plan_mo_qty] , [act_mo_qty] )
    ) AS HIT_RATE_UNPIVOT;
WHERE FORMAT(datecode,'yyyy-MM') >= FORMAT(GETDATE()-5,'yyyy-MM')
